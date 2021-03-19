import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination'
const Page = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrnetPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(12);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setData(res.data);
            setLoading(false);
        }
        fetchData();

    }, []);
    const indexOfLastData=currentPage*dataPerPage;
    const indexOfFirstData=indexOfLastData-dataPerPage;
    const currentData=data.slice(indexOfFirstData,indexOfLastData);
    let paginate=(pageNumber)=>{
        setCurrnetPage(pageNumber)
    }


    return (
        <>
        {!data? (<h2>Loading...</h2>) : (<table className="table">
            <thead>
                <tr>
                    <th className="text-info">ID</th>
                    <th className="text-info">Title</th>
                </tr>
            </thead>
            <tbody>
                {currentData.map(post=>(
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                   

                ))}
          
                    
            </tbody>
        </table>
       
)}
 <Pagination postsPerPage={dataPerPage} totalPosts={data.length}
paginate={paginate}/>
            



        </>
    )
}
export default Page;

