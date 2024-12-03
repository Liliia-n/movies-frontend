import { toast } from 'react-toastify';
import { t } from 'i18next';

import { uploadValidation } from '../constants';

const validateFile = (validTypes: string[], maxSizeInMB: number, file: File): boolean => {
  const maxSize = maxSizeInMB * 1024 * 1024;

  if (!validTypes.includes(file.type)) {
    toast.error(t('common.invalidFileType'));

    return false;
  }

  if (file.size > maxSize) {
    toast.error(
      t('common.fileSizeExceeded', {
        maxSize: uploadValidation.maxSize
      })
    );

    return false;
  }

  return true;
};

export default validateFile;
