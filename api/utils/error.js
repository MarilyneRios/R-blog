export const errorHandler = (statusCode, message) => {
    // Crée une nouvelle instance  de la classe d'Error.
    const error = new Error(); 
    // Indiquer le code d'erreur HTTP.          
    error.statusCode = statusCode;      
    // Description de l'erreur.
    error.message = message;         

    return error;                       
};
