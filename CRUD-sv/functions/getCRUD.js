import axios from 'axios';

const getCRUD = (token, context, navigate) =>
    axios({
        url: ${process.env.REACT_APP_BACKEND_URL}/home,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .then((response) => {
        console.log(response);
        if (response.status === 200) {
            context.setMyhome(response.data);
        }
    })
    .catch((error) => {
        console.error(error);
        navigate("/error");
    });

export default getCRUD;
