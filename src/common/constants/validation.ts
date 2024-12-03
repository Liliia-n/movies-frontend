const uploadValidation = {
  imgFileTypes: ['image/jpeg', 'image/png', 'image/jpg'],
  maxSize: 1, // in MB
  maxFiles: 1
};

const textareaValidation = {
  descriptionMaxLength: 800
};

export { uploadValidation, textareaValidation };
