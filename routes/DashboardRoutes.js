import { v4 as uuid } from 'uuid';
/**
 *  All Dashboard Routes
 *
 *  Understanding name/value pairs for Dashboard routes
 *
 *  Applicable for main/root/level 1 routes
 *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
 *
 *  Applicable for main/root/level 1 and subitems routes
 * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 *  title 		: String - If menu contains childern use title to provide main menu name.
 *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
 *
 *  Applicable for subitems / children items routes
 *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
 *  children	: Array - Use to specify submenu items
 *
 *  Used to segrigate menu groups
 *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
 *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
 *
 */

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/dashboard'
	},
	{
		id: uuid(),
		title: 'Main',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Joining History',
		icon: 'layers',
		children: [
			{ id: uuid(), link: 'joining-package-history', name: 'Joining Package History' },
			{ id: uuid(), link: 'matrix-history', name: 'Matrix History'}
			// { id: uuid(), link: '/pages/billing', name: 'Billing' },
			// { id: uuid(), link: '/pages/pricing', name: 'Pricing'},
			// { id: uuid(), link: '/404', name: '404 Error' }
		]
	},	
	{
		id: uuid(),
		title: 'Earnings',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/direct-income', name: 'Direct Income' },
			{ id: uuid(), link: '/high-power-income', name: 'High Power Income' },
			{ id: uuid(), link: '/global-matrix-level-income', name: 'Global MAtrix Level Income'},	
			{ id: uuid(), link: '/dividend-income', name: 'Dividend Income'},
			{ id: uuid(), link: '/leadership-income', name: 'Leadership Income'},	
			{ id: uuid(), link: '/matrix-1-income', name: 'Matrix-1 Income'},	
			{ id: uuid(), link: '/matrix-2-income', name: 'Matrix-2 Income'},	
			{ id: uuid(), link: '/matrix-3-income', name: 'Matrix-3 Income'},	
			{ id: uuid(), link: '/matrix-4-income', name: 'Matrix-4 Income'},	
			{ id: uuid(), link: '/matrix-5-income', name: 'Matrix-5 Income'},	
			{ id: uuid(), link: '/matrix-6-income', name: 'Matrix-6 Income'},	
			{ id: uuid(), link: '/matrix-7-income', name: 'Matrix-7 Income'},	
			{ id: uuid(), link: '/robots-income', name: 'Robots Income'}				
		]
	},
	{
		id: uuid(),
		title: 'My Team',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/direct-team', name: 'Direct Team' },
			{ id: uuid(), link: '/total-team', name: 'Total Team' },
			{ 
				id: uuid(),
				title: 'Matrix Team',
				children: [
					{ id: uuid(), link: '/matrix-team-1', name: 'Matrix Team-1' },
					{ id: uuid(), link: '/matrix-team-2', name: 'Matrix Team-2' },	
					{ id: uuid(), link: '/matrix-team-3', name: 'Matrix Team-3' },	
					{ id: uuid(), link: '/matrix-team-4', name: 'Matrix Team-4' },	
					{ id: uuid(), link: '/matrix-team-5', name: 'Matrix Team-5' },	
					{ id: uuid(), link: '/matrix-team-6', name: 'Matrix Team-6' },	
					{ id: uuid(), link: '/matrix-team-7', name: 'Matrix Team-7' },	
				]
			}		
		]
	},
	{
		id: uuid(),
		title: 'Withdrawal',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/withdrawal-request', name: 'Withdrawal Request' },
			{ id: uuid(), link: '/withdrawal-report', name: 'Withdrawal Report' }
		]
	},
	{
		id: uuid(),
		title: 'Upgraded Users',
		icon: 'layers',
		link:'/upgraded-user'
	},
	{
		id: uuid(),
		title: 'Logout',
		icon: 'lock',
		link: ''
	}
	// {
	// 	id: uuid(),
	// 	title: 'Components',
	// 	icon: 'monitor',
	// 	children: [
	// 		{ id: uuid(), link: '/components/accordions', name: 'Accordions' },
	// 		{ id: uuid(), link: '/components/alerts', name: 'Alerts' },
	// 		{ id: uuid(), link: '/components/badges', name: 'Badges' },
	// 		{ id: uuid(), link: '/components/breadcrumbs', name: 'Breadcrumbs' },
	// 		{ id: uuid(), link: '/components/buttons', name: 'Buttons' },
	// 		{ id: uuid(), link: '/components/button-group', name: 'ButtonGroup' },
	// 		{ id: uuid(), link: '/components/cards', name: 'Cards' },
	// 		{ id: uuid(), link: '/components/carousels', name: 'Carousel' },
	// 		{ id: uuid(), link: '/components/close-button', name: 'Close Button' },
	// 		{ id: uuid(), link: '/components/collapse', name: 'Collapse' },
	// 		{ id: uuid(), link: '/components/dropdowns', name: 'Dropdowns' },
	// 		{ id: uuid(), link: '/components/list-group', name: 'Listgroup' },
	// 		{ id: uuid(), link: '/components/modal', name: 'Modal' },
	// 		{ id: uuid(), link: '/components/navs', name: 'Navs' },
	// 		{ id: uuid(), link: '/components/navbar', name: 'Navbar' },
	// 		{ id: uuid(), link: '/components/offcanvas', name: 'Offcanvas' },
	// 		{ id: uuid(), link: '/components/overlays', name: 'Overlays' },
	// 		{ id: uuid(), link: '/components/pagination', name: 'Pagination' },
	// 		{ id: uuid(), link: '/components/popovers', name: 'Popovers' },
	// 		{ id: uuid(), link: '/components/progress', name: 'Progress' },
	// 		{ id: uuid(), link: '/components/spinners', name: 'Spinners' },
	// 		{ id: uuid(), link: '/components/tables', name: 'Tables' },
	// 		{ id: uuid(), link: '/components/toasts', name: 'Toasts' },
	// 		{ id: uuid(), link: '/components/tooltips', name: 'Tooltips' }
	// 	]
	// },	
	// {
	// 	id: uuid(),
	// 	title: 'Menu Level',
	// 	icon: 'corner-left-down',
	// 	children: [
	// 		{ 
	// 			id: uuid(), 
	// 			link: '#', 
	// 			title: 'Two Level',
	// 			children: [
	// 				{ id: uuid(), link: '#', name: 'NavItem 1'},
	// 				{ id: uuid(), link: '#', name: 'NavItem 2' }
	// 			]
	// 		},
	// 		{ 
	// 			id: uuid(), 
	// 			link: '#', 
	// 			title: 'Three Level',
	// 			children: [
	// 				{ 
	// 					id: uuid(), 
	// 					link: '#', 
	// 					title: 'NavItem 1',
	// 					children: [
	// 						{ id: uuid(), link: '#', name: 'NavChildItem 1'},
	// 						{ id: uuid(), link: '#', name: 'NavChildItem 2'}
	// 					]
	// 				},
	// 				{ id: uuid(), link: '#', name: 'NavItem 2' }
	// 			]
	// 		}
	// 	]
	// },	
	// {
	// 	id: uuid(),
	// 	title: 'Documentation',
	// 	grouptitle: true
	// },
	// {
	// 	id: uuid(),
	// 	title: 'Docs',
	// 	icon: 'clipboard',
	// 	link: '/documentation'
	// },
	// {
	// 	id: uuid(),
	// 	title: 'Changelog',
	// 	icon: 'git-pull-request',
	// 	link: '/changelog'
	// },
	// {
	// 	id: uuid(),
	// 	title: 'Download',
	// 	icon: 'download',
	// 	link: 'https://codescandy.gumroad.com/l/dashui-nextjs'
	// }
];

export default DashboardMenu;
