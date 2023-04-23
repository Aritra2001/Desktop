const Hero = () => {
    const clickhandel = () => {
        window.alert("THE PROJECT IS LOADING");
        
    }
    return (
        <div className="herosec">
            <div className="head1">DISCOVER AND COLLECT RARE NFTs</div>
            <div className="head2">The most secure marketplace for buying and selling unique crypto assets.</div>
            <button onClick={clickhandel} className="b1" id="one">BUY NFTS</button>
            <button onClick={clickhandel} className="b2" id="two">SELL NFTS</button>
            <div className="image"></div>
            <div className="img2"></div>
            <div className="lg">FEATURED ON</div>
        </div> 
    )
}
export default Hero;