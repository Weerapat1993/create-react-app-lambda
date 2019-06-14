
import { notification } from 'antd';

export const notificationWithIcon = (type, description) => {
  notification[type]({
    message: 'Notification',
    description,
  });
};