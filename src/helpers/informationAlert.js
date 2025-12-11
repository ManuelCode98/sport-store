import Swal from "sweetalert2";

export const informationAlert = (title, text)=>{ 

    Swal.fire({
        title,
        text,
        icon: 'info',
        theme: 'dark',

    });

};

