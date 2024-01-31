const validateClientSide = (formData) => {
    const errors = {};

    if (!formData.title) {
        errors.title = 'Title is required';
    }

    if (!formData.genre) {
        errors.genre = 'Genre is required';
    }

    if (!formData.releaseYear) {
        errors.releaseYear = 'Release year is required';
    } else if (isNaN(formData.releaseYear) || formData.releaseYear < 1800 || formData.releaseYear > new Date().getFullYear()) {
        errors.releaseYear = 'Invalid release year';
    }

    return errors;
};

const validateServerSide = (formData) => {
    const errors = {};

    if (!formData.title || typeof formData.title !== 'string') {
        errors.title = 'Title is required and must be a string';
    }

    if (!formData.genre || typeof formData.genre !== 'string') {
        errors.genre = 'Genre is required and must be a string';
    }

    if (!formData.releaseYear || isNaN(formData.releaseYear) || formData.releaseYear < 1800 || formData.releaseYear > new Date().getFullYear()) {
        errors.releaseYear = 'Invalid release year';
    }

    return errors;
};

module.exports = {
    validateClientSide,
    validateServerSide,
};