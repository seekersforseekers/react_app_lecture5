import React,{createContext} from 'react' // jo kam pros krta h wo ya h k A->b->c->d ik tree h A ka child b h b ka child c h etc
//ab ager d ko koi chiz chahiy apny grand paren A s to A wo chiz phly b ko de ga phr b wo c ko de ga c wo d ko punchay ga 
// esa krna fzul h k jinhy wo nahi b tha required ham n sab ko byja so context Apis ko use krein gay ham k A wo hiz directly hi d ko byj de ander b,c ka istimal a ho

const counterContext=createContext(23); // 2 parameters leta h ya

export default counterContext; // isy app.jsm import krein gay 