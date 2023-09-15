import Completion from "@/components/Completion";
import {Card} from "flowbite-react";
import PairingCard from "@/app/pairings/PairingCard";

export default function Index() {
    return (
        <div>
            <div className={'mx-5 p-5 text-center'}>
                <h1 className={'text-3xl my-2'}>
                    Pairings
                </h1>
                <p className={'my-2'}>Analyze job descriptions matches</p>
            </div>

            <Completion></Completion>
        </div>
    );
}