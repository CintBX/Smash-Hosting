import React, { Fragment } from 'react';
import { Button, 
	UncontrolledPopover, 
	PopoverHeader, 
	PopoverBody 
} from 'reactstrap';

function ResultsPopover() {
	return (
		<Fragment>
			<Button 
				id="results" 
				type="button" 
				color="success"
				className="mt-3"
			>
				Results
			</Button>
			<UncontrolledPopover trigger="focus" placement="bottom" target="results">
				<PopoverBody><b>Finals: </b> Cin <i>(Samus)</i> vs Vagalume <i>(Pit)</i></PopoverBody>
				<PopoverHeader><b>WINNER: </b> Cin</PopoverHeader>
			</UncontrolledPopover>
		</Fragment>
	);
};

export default ResultsPopover;