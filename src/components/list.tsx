export default function List() {
    return (
        <div className="info">
            <h1 className="title">Home</h1>
            <small>Oackland Toro</small>
            <p>Let's take this to the next level</p>
        <button>search nothing</button><hr/>
            <div className="search">
                <input type="text" placeholder="hack the world"></input>
            </div>
            <section><p>we can change the world!</p>
            <p>One person can make the world a better place</p>
            <p>One person can change the world</p>
            </section>
            <table className="demo">
                <thead>
                <tr>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Range</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Model S</td>
                    <td>83,900</td>
                    <td>405 mi</td>
                </tr>
                <tr>
                    <td>Model 3</td>
                    <td>42,900</td>
                    <td>272 mi</td>
                </tr>
                <tr>
                    <td>Model X</td>
                    <td>99,990</td>
                    <td>351 mi</td>
                </tr>
                <tr>
                    <td>Model Y</td>
                    <td>54,990</td>
                    <td>330 mi</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td></td>
                    <td>USD</td>
                    <td>Miles</td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}
