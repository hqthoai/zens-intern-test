import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import VoteButton from "./VoteButton/VoteButton";
import JokeService from "../../services/JokeServices";
import VoteService from "../../services/VoteService";

function JokeStory() {
    const [joke, setJoke] = useState(null);
    const [vote, setVote] = useState(false);

    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const data = await JokeService.getAvailable();
                setJoke(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchJoke();
    }, [vote]);

    const handleVote = async (type) => {
        try {
            await VoteService.voteJoke(joke?._id, type);
            setVote(!vote);
            toast.success("Thanks for voting!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <React.Fragment>
            <ToastContainer />
            <div className="lg:px-[220px] md:px-[80px] px-7 mt-[68px] mb-[104px] min-h-[200px]">
                {joke?.message ?
                    <div className="md:min-h-[200px] min-h-[300px] text-gray-700 font-semibold md:text-xl text-base text-center">
                        <p>{joke.message}</p>
                    </div>
                    : <div>
                        <div className="md:min-h-[200px] min-h-[300px] md:text-base text-sm text-start relative" >
                            <p>
                                {joke?.content}
                            </p>
                            <div className="md:block hidden after:block after:content-[''] after:border-b after:w-2/3 after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2"></div>
                        </div >

                        <div className="flex mt-12 items-center justify-center">
                            <div className="mr-8">
                                <VoteButton content="This is Funny!" color="#2c7edb" onClick={() => handleVote('like')} />
                            </div>
                            <VoteButton content="This is not funny." color="#2fb363" onClick={() => handleVote('dislike')} />
                        </div>
                    </div>

                }
            </div >
        </React.Fragment>
    );
}

export default JokeStory;