const Cards = () => {
    return (
        <section className="cards" id="services">
            <h2 className="title">Services</h2>
            <div className="content">
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-edit"></i>
                    </div>
                    <div className="info">
                        <h3>IT Manager</h3>
                        <p>responsible for the overall performance of a company's electronic networks, and for leading the IT department in fulfilling the organization’s information systems requirements.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-video"></i>
                    </div>
                    <div className="info">
                        <h3>Web Developer</h3>
                        <p>Full-stack developers design and create websites and applications for various platforms.</p>
                    </div>
                </div>
                {/* <div className="card">
                    <div className="icon">
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="info">
                        <h3>Curriculum Development</h3>
                        <p>Develop complete curriculums for various technical topics to produce digital transformative courses</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
export default Cards;