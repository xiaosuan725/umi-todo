declare namespace API { 

  interface Login_Request_Body {
    email: string;
    mobilePhoneNumber: string;
    password: string;
  }
  
  interface User_Record  {
    nickName: string;
    avatar: string;
    sessionToken: string;
    updatedAt: Date;
    phone: string;
    objectId: string;
    username: string;
    createdAt: Date;
    emailVerified: boolean;
    mobilePhoneVerified: boolean;
  }
}