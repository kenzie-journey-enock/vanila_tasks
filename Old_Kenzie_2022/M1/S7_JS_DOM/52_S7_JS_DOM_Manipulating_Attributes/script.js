const users = [
  {
   name: 'Madalena',
   profile: 'Admin',
   sector: 'Administration'
 },
 {
   name: 'Rafael',
   profile: 'user',
   sector: 'Finance'
 },  
 {
   name: 'Baltazar',
   profile: 'user',
   sector: 'Reception'
 },  
 {
   name: 'Carmen',
   profile: 'Admin',
   sector: 'Business'
 }    
]


function createNameElement(name) {
  const nameTag = document.createElement('h1')
  nameTag.innerText = name
  return nameTag
}
function createProfileElement(profile) {
  const profileTag = document.createElement('span')
  profileTag.innerText = profile
  return profileTag
}
function createSectorElement(sector) {
  const sectorTag = document.createElement('p')
  sectorTag.innerText = sector
  return sectorTag
}


function createContainerUser(user) {
  const { name, profile, sector } = user

  const container = document.createElement('div')
  container.className = 'user-card'
  if (profile == 'Admin'){
    container.className = 'admin-card'
  } 
  if (sector == 'Administration') {
    container.className = 'administration-card'
  }

  const userName = createNameElement(name)
  const userProfile = createProfileElement(profile)
  const userSector = createSectorElement(sector)

  container.appendChild(userName)
  container.appendChild(userProfile)
  container.appendChild(userSector)

  return container
}

for (i in users){
  const containerUser = createContainerUser(users[i])
  document.getElementById('root').appendChild(containerUser)
}

