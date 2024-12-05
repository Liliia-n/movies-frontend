import { toast } from 'react-toastify';
import { t } from 'i18next';

import { uploadValidation } from '../constants';

const BYTES_IN_KILOBYTE = 1024;

const validateFile = (validTypes: string[], maxSizeInMB: number, file: File): boolean => {
  const maxSize = maxSizeInMB * BYTES_IN_KILOBYTE * BYTES_IN_KILOBYTE;

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
