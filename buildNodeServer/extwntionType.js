
export const exten = (extention) =>{


    let select;
    switch (extention) {
        case 'html':select = 'text/html';
            break;
        case 'css' :select = 'text/css';
            break;
        case 'pdf' :select = 'application/pdf';
            break;
        case 'jpeg' :select = 'image/jpeg'; 
            break;
        default: select ='text/html';
            break;
    };

    return select;
}