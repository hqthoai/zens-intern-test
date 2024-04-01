import React, { useEffect, useState } from "react";
import VoteButton from "./VoteButton/VoteButton";
import JokeService from "../../services/JokeServices";
import VoteService from "../../services/VoteService";

function JokeStory() {
    const [joke, setJoke] = useState(null);

    const fetchJoke = async () => {
        try {
            const data = await JokeService.getAvailable();
            if (data)
                setJoke(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchJoke();
    }, []);
    const handleVote = async (type) => {
        console.log('vote ne', type);
        try {
            await VoteService.voteJoke(joke?._id, type);
            fetchJoke();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="lg:px-[220px] md:px-[80px] px-7 mt-[68px] mb-[104px] min-h-[200px]">
            {joke?.message ?
                <div className="md:min-h-[200px] min-h-[300px] text-gray-700 font-semibold text-xl text-center">
                    <p>{joke.message}</p>
                </div>
                : <React.Fragment>
                    <div className="md:min-h-[200px] min-h-[300px] text-start relative" >
                        <p>
                            {joke?.content}
                        </p>
                        <div className="md:block hidden after:block after:content-[''] after:border-b after:w-2/3 after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2"></div>
                    </div >

                    <div className="flex mt-[50px] items-center justify-center">
                        <div className="mr-8">
                            <VoteButton content="This is Funny!" color="#2c7edb" onClick={() => handleVote('like')} />
                        </div>
                        <VoteButton content="This is not funny." color="#2fb363" onClick={() => handleVote('dislike')} />
                    </div>
                </React.Fragment>

            }
        </div >
    );
}

export default JokeStory;