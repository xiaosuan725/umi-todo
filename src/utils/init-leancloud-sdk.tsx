import { appId, appKey } from '@/const/api';
import Cloud from 'leancloud-storage'

Cloud.init({
  appId,
  appKey,
  serverURL: "https://pug2mwnu.lc-cn-n1-shared.com"
});