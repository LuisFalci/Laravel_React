import React, { useEffect, useState } from "react";
import api from "../components/api"

export default function JournalList(){
    
    const [journals, setJournals] = useState([]); 

    useEffect(() => {
        api.get("journals").then(({ data }) => {
            setJournals(data.data);
        })
        console.log(journals)
    }, []);

    return(
        <div>
            <h1>ola</h1>
            {journals?.map((journal) => (
                <p key={journal.id}>{journal.attributes.title}</p>
            ) )}
        </div>
    )
} 