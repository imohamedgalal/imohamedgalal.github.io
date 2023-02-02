const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="title">Projects</h2>
            <div className="content">
                <div className="project-card">
                    <div className="project-image">
                        <img src="images/work1.jpg" alt="" />
                    </div>
                    <div className="project-info">
                        <p className="project-category">MG Sniper</p>
                        <strong className="project-title">
                            <span>an chrome extention for ea WebApp fifa 2020 & 2021 to make players buy and sell items.</span><br /><br />
                            <a href="/#" className="more-details">More details</a>
                        </strong>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src="images/work2.jpg" alt="" />
                    </div>
                    <div className="project-info">
                        <p className="project-category">Fut Heroes</p>
                        <strong className="project-title">
                            <span>an userscript for ea WebApp fifa 2022 & 2023 to make players buy and sell items with api integration with futbin website.</span><br /><br />
                            <a href="/#" className="more-details">More details</a>
                        </strong>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src="images/work3.jpg" alt="" />
                    </div>
                    <div className="project-info">
                        <p className="project-category">Fut Heroes Backend</p>
                        <strong className="project-title">
                            <span>an laravel project for managment users with roles and permisions</span><br /><br />
                            <a href="/#" className="more-details">More details</a>
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;