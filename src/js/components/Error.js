import { root } from '../App';

const TOAST_ID = 'toast-error';

const removeErrorToast = () => {
  document.getElementById(TOAST_ID).outerHTML = '';
};

export const showErrorToast = e => {
  const toast = document.createElement('div');
  toast.id = TOAST_ID;
  toast.classList.add('ToastError');
  toast.innerText = 'There has been an error ';
  root.append(toast);
  setTimeout(removeErrorToast, 5000);
};
