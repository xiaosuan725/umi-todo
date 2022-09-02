import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import Cloud from 'leancloud-storage'

interface UpLoadImgtProps {
  value?: string;
  onChange?: (value: string) => void;
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export const UploadImg: React.FC<UpLoadImgtProps> = ({ value, onChange }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(value);

  const triggerChange = (changedValue: string) => {
    onChange?.(changedValue);
  };

  const customRequest: UploadProps['customRequest'] = (options) => {
    setLoading(true)
    getBase64(options.file as RcFile, base64 => {
      const file = new Cloud.File('avatar.png', { base64 })
      file.save().then((res: any) => {
        const url = res.attributes.url
        triggerChange(url)
        setLoading(false);
        setImageUrl(url);
      })
    });
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      customRequest={customRequest}
      beforeUpload={beforeUpload}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  );
};
