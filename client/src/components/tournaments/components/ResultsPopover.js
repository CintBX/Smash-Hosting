import React, { useState } from 'react';
import {
	Button,
	Popover,
	PopoverHeader,
	PopoverBody
} from 'reactstrap';

const ResultsPopover = props => {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const toggle = () => setPopoverOpen(!popoverOpen);

	return (
		<div>
			<Button id="Popover1" type="button" color="success">
				Results
			</Button>

			<Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
				<PopoverBody><b>Finals: </b> Cin <i>(Samus)</i> vs Vagalume <i>(Pit)</i></PopoverBody>
				<PopoverHeader><b>WINNER: </b> Cin</PopoverHeader>
			</Popover>
		</div>
	)
};

export default ResultsPopover;