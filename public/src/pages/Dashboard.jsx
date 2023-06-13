import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <header class="masthead">
                <h1 class="site-title">Welcome to the HelperApp Dashboard</h1>
                <div class="intro">
                    <p>Here you can find useful information which could help you with your upcoming assignments.</p>
                    <p>Below you can find various articles which can get you started on various different projects </p>
                </div>
            </header>

            <main id="content" class="main-area">
                <ul class="cards">
                    <li class="card-item double">
                        <a href="https://www.frontiersin.org/articles/10.3389/fmars.2022.845113/full" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/crVO0UMdoVU/600x600" alt="Beach. Photo by Andreas Rønningen" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">Desalination </h3>
                                    <div class="location">Characteristics of Desalination</div>
                                    <p>Desalination Brine and Its Impacts on Marine Chemistry and Health</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="card-item">
                        <a href="https://architectuul.com/architecture/louvre-pyramid" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/xkMArBuwK44/600x600" alt="Pyramid. Photo by Andreas Rønningen" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">Louvre Museum Pyramid</h3>
                                    <div class="location">Paris, France</div>
                                    <p>One of the great architectural achievements of our time</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="card-item">
                        <a href="https://www.mdpi.com/2075-4418/13/5/852" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/U1gvhqVQ2kQ/600x600" alt="Dental Prostetics" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">Dental Prostetics</h3>
                                    <div class="location">Risk Factors of Prosthetic Success</div>
                                    <p>Prosthetics have been developing for year in order ot make our lives easier, however what are their risks </p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="card-item">
                        <a href="https://www.frontiersin.org/articles/10.3389/fped.2021.777840/full" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/tMFeatBSS4s/600x600" alt="Medical Surgery" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">Surgery Advancements</h3>
                                    <div class="location">Surgery Advancements in the Medical Field</div>
                                    <p>6 Biggest Changes in Surgical Advancements</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="card-item">
                        <a href="https://www.frontiersin.org/articles/10.3389/fncir.2023.1175899/abstract" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/IHfOpAzzjHM/600x600" alt="Neural links" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">Linking neural circuits</h3>
                                    <p>Linking neural circuits to the mechanics of animal behavior in Drosophila larval locomotion</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="card-item double">
                        <a href="https://coe.gatech.edu/news/2021/11/future-space-exploration" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/uj3hvdfQujI/600x600" alt="Space exploration" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">Space exploration</h3>
                                    <div class="location">The next steps in spece exploration</div>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="card-item">
                        <a href="https://www.frontiersin.org/articles/10.3389/fnmol.2023.1182759/abstract" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/YQYacLW8o2U/600x600" alt="DNA" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">DNA </h3>
                                    <div class="location">China-Japan Union Hospital of Jilin University</div>
                                    <p>DNA methylation meningioma biomarkers: attributes and limitations</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="card-item">
                        <a href="https://www.frontiersin.org/articles/10.3389/fnagi.2021.791679/full" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/GodLOdCpLi4/600x600" alt="Magnetic resonance" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">Magnetic Resonance</h3>
                                    <div class="location">nstitute for Biomedical Engineering, ETH Zurich and University of Zurich, Zurich, Switzerland</div>
                                    <p>Magnetic Resonance Imaging in Tauopathy Animal Models</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                    <li class="card-item">
                        <a href="https://www.frontiersin.org/articles/10.3389/frai.2021.622364/full" target="_blank" rel="nofollow">
                            <figure class="card">
                                <img src="https://source.unsplash.com/D_YZmKGSyic/600x600" alt="AI" />
                                <figcaption class="caption">
                                    <h3 class="caption-title">Artificial Inteligence</h3>
                                    <div class="location">TNO Human Factors, Soesterberg, Netherlands</div>
                                    <p>Human- versus Artificial Intelligence</p>
                                </figcaption>
                            </figure>
                        </a>
                    </li>
                </ul>
            </main>
        </div>
    );
};

export default Dashboard;