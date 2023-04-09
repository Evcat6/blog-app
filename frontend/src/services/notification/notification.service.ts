import { type toast as Toast } from 'react-toastify';

class NotificationService {
    private readonly toast: typeof Toast;

    public constructor(toast: typeof Toast) {
        this.toast = toast;
    }

    public success(message: string): void {
        this.toast.success(message);
    }

    public warn(message: string): void {
        this.toast.warn(message);
    }

    public error(message: string): void {
        this.toast.error(message);
    }

    public warning(message: string): void {
        this.toast.warning(message);
    }

    public info(message: string): void {
        this.toast.info(message);
    }
}

export { NotificationService };
