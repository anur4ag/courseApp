import Coursecard from "../Utils/Coursecard";
import axios from "axios";

import { useEffect, useState } from "react";

function Courses({logged}) {
    const [courses, setCourses] = useState([]);
    let count=0;
    useEffect(() => {
        async function GET() {
            try {
                const response = await axios.get("http://localhost:3000/admin/courses");
                console.log(response.data);
                setCourses(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        GET();
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            
            {courses.map((product) => (
                <Coursecard
                    key={count++}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    imageLink={product.imageLink}
                    id={product._id}
                    unlockBuy={true}
                    logged={logged}
                />
            ))}
        </div>
    );
}



export default Courses;
