export default function Header({request, text, name, value, onChange}){
    return(
        <div className="header">
            <h1>MoviesLib</h1>
            <form onSubmit={request}>
                <input type={text} name={name} value={value} onChange={onChange} />
                <button type="submit">Buscar filme</button>
            </form>
        </div>
    );
};