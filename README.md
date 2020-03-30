# responsiveSideBar
The idea is to create a responsive side bar with just HTML, CSS, and javascript.
Later we are going to change the style with flexbox and CSS Grid.

Steps:
1.) html structure of the navigation list.  
2.) css style for the navigation list  
3.) html for hamburger menu  
4.) css style for hamburger menu  
5.) add transition property through js - 	
		i.)create a css style with a negative margin to hide the menu  
		ii.)activate the style with the help of js class  
Started with a div for the sidebar, and inside it an unordered list with 3 list-items.  
The div got an id "sidebar".  
The \<ul> and \<li> didn't get any class.  
Styles were applied only to the sidebar and the list-items and NOT the \<ul>.  
Elements were centred using text-align:center, and padding on top and bottom.  
\<ul> is not styled at all.  
Gave the \<li> a hover effect(change in background-color when hovered over).  
Created a wrapper element around the sidebar so that a hamburger menu icon could be added beside the sidebar.  
Created anchor tags around \<li>s and gave them sufficient padding.  
Created a <div> with id "sidebar-btn" and three <span>s inside it for the hamburger menu.  
Styled the hamburger menu. It was not visible in the beginning but finally figured that display wasn't mentioned.  
The hamburger menu was residing perfectly beside the sidebar but when I gave the wrapper a background color, 
it didn't show at all. After a little trial and error I figured the position of the wrapper wasn't mentioned. So I gave it 
"position: fixed". Not only the background color of the wrapper was visible, but also the hamburger menu shifted to 
27% of the wrapper.  
Changed position of sidebar from fixed to absolute and gave a width of 90%.
