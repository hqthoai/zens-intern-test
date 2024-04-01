import VoteButton from "./VoteButton/VoteButton";

function JokeStory() {
    return (
        <div className="lg:px-[220px] md:px-[80px] px-7 mt-[68px] mb-[104px] min-h-[200px]">
            <div className="md:min-h-[200px] min-h-[300px] text-start relative" >
                <p>
                    A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."

                    The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."

                    The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."
                </p>
                <div className="md:block hidden after:block after:content-[''] after:border-b after:w-2/3 after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2"></div>
            </div >

            <div className="flex mt-[50px] items-center justify-center">
                <div className="mr-8">
                    <VoteButton content="This is Funny!" color="#2c7edb" />
                </div>
                <VoteButton content="This is not funny." color="#2fb363" />
            </div>
        </div >
    );
}

export default JokeStory;