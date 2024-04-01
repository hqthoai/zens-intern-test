const apiUrl = `${process.env.REACT_APP_API_URL}/jokes`;

const JokeService = {
    getAvailable: async () => {
        try {
            const response = await fetch(apiUrl + '/available', {
                credentials: 'include'
            });
            if (!response.ok) {
                if (response.status === 404)
                    return response.json();
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    },
}

export default JokeService;
