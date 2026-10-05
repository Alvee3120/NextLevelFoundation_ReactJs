export default function({children, name , age, address,phone,company}) {
    return (
        <>
        <p>{children}</p>
            <p>Name: {name} </p>
            <p>Age: {age} </p>
            <p>Address: {address} </p>
            <p>Phone: {phone} </p>
            <p>Company: {company} </p>
            
        </>
    );
}