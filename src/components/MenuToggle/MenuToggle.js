import React from 'react';
import MenuBtnStyle from "./StyledComponents";

const MenuToggle = ({onToggle , isOpen}) => {

	return (
		<div>
			<MenuBtnStyle
				open={isOpen}
				onClick={onToggle}
				className={isOpen ? 'fa fa-times' : 'fa fa-bars'}/>
		</div>
	);
};

export default MenuToggle;