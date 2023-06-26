
const mockId = '';


// ==============SAUDAÇÃO AO REPRESENTANTE=============
const user = getUserBuId(mockId);
const userFirstName = user.name.split(' ')[0];

const saluteRepresentative = document.getElementsByClassName('salute-representative')[0];
const Writesalute = `Bem vindo(a), ${userFirstName}`;
saluteRepresentative.innerHTML = Writesalute;

// ==================INFORMAÇÕES DO REPRESENTANTE============
const representativeInfoData = document.getElementsByClassName('representative-info__data')[0];

const renderRepresentativeName = document.createElement('p')
renderRepresentativeName.classList.add("donor-info__data__text");
renderRepresentativeName.innerHTML = `<b>Nome: </b>${user.name}`
representativeInfoData.appendChild(renderRepresentativeName)

const renderRepresentativeCellphone = document.createElement('p')
renderRepresentativeCellphone.classList.add("donor-info__data__text");
renderRepresentativeCellphone.innerHTML = `<b>Telefone: </b>${user.cellphone}`
representativeInfoData.appendChild(renderrepresentativeCellphone)

const renderRepresentativeEmail = document.createElement('p')
renderRepresentativeEmail.classList.add("donor-info__data__text");
renderRepresentativeEmail.innerHTML = `<b>E-mail: </b>${user.email}`
representativeInfoData.appendChild(renderRepresentativeEmail)
