import React from 'react';

const ScoresAndRemarks = () => {
    return (
        <div>
                <div class="container">

			<div class="content row">
				<div class="averages">
					<div class="averages-title">
						<p>Half Term Average Grade</p>
					</div>
					<div class="averages-table">
						<div class="test testers">
							<p><i class="fa fa-user-circle-o" aria-hidden="true"></i></p>
							<p>3 Assignments per semester</p>
						</div>
						<div class="test to-buy">
							<p>65%</p>
							<p>Ux Strategies</p>
						</div>
						<div class="test desirability">
							<p>45%</p>
							<p>Web Applications</p>
						</div>
						<div class="test want-it">
							<p>78%</p>
							<p>Data Science</p>
						</div>
						<div class="test score">
							<p>62.66</p>
							<p>overall score</p>
						</div>
					</div>
				</div>
			
				<div class="complete-tests">
					
					<div class="complete-tests-title">
						<p>Upcoming Assinments</p>
						
					</div>
					<div class="complete-test-table">
						<div class="table-name">
							<p>Disertation Project</p>
						</div>
						<div class="table-content">
							<p>A breif description of what the project will be</p>
						</div>
						<div class="table-score">
							<p>40%</p>
							<p>Grade needed to pass</p>
						</div>
					</div>
					<div class="complete-test-table">
						<div class="table-name">
							<p>Industrial Consulting project</p>
						</div>
						<div class="table-content">
							<p>A breif description of what the project will be</p>
						</div>
						<div class="table-score">
                            <p>40%</p>
							<p>Grade needed to pass</p>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    );
};

export default ScoresAndRemarks;