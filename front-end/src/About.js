// ...existing code...
import { useEffect, useState } from 'react'
import axios from 'axios'

function About() {
    const [about, setAbout] = useState(null);

    useEffect(() => {
    axios.get("/api/about").then((res) => setAbout(res.data));
    }, []);

    if (!about) return <p>Loading...</p>;

    return (
    <div style={{ padding: "22px", textAlign: "center" }}>
        <h1>{about.title}</h1>
        <img
        src={about.image}
        alt='Terry Cao'
        style={{ width: "300px", borderRadius: "10px" }}
        />
        <h2>{about.name}</h2>
        <p></p>
        <p>{about.intro}</p>
        <p></p>
        <p>{about.middle}</p>
        <p></p>
        <p>{about.end}</p>
    </div>
    );
}

export default About

