const apiUrl = `${process.env.REACT_APP_API_URL}/votes`;

const VoteService = {
    voteJoke: async (jokeId, voteType) => {
        try {
            const reqData = {
                jokeId, voteType
            }
            const response = await fetch(apiUrl + `/vote`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(reqData),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            if (!response.ok) {
                // throw new Error(`HTTP error! Status: ${response.status}`);
                return { error: response.statusText, code: response.status };
            } else {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.error(error);
        }
    },
}

export default VoteService;
