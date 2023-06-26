let db = {
  users: [
    {
    id: 1,
    name: 'Maria Elsébio da Fonseca',
    cellphone: '35991214565',
    email: 'mariaFonseca@gmail.com',
    bornAt: '25/12/1990',
    isHealthNow: true,
    bloodType: 'A+',
    city: 'Santa Maria',
    weight: 60,
    password: '12345',
    donations:
    [
      {
        id: 1,
        date: '25/11/2022',
        donationConfirmed: false,
        address: {
          bloodDonorCenter: 'Hospital de santa Maria',
          street: 'Rua Maria Oliveira',
          number: 12,
          neighborhood: 'center',
          city: 'Santa Maria',
          state: 'RS'
        }
      },
      {
        id: 2,
        date: '25/11/2022',
        donationConfirmed: true,
        address: {
          bloodDonorCenter: 'Hospital de santa Maria',
          street: 'Rua Maria Oliveira',
          number: 12,
          neighborhood: 'center',
          city: 'Santa Maria',
          state: 'RS'
        }
      },
      {
        id: 3,
        date: '25/11/2022',
        donationConfirmed: false,
        address: {
          bloodDonorCenter: 'Hospital de santa Maria',
          street: 'Rua Maria Oliveira',
          number: 12,
          neighborhood: 'center',
          city: 'Santa Maria',
          state: 'RS'
        }
      },
      {
        id: 4,
        date: '25/11/2022',
        donationConfirmed: false,
        address: {
          bloodDonorCenter: 'Hospital de santa Maria',
          street: 'Rua Maria Oliveira',
          number: 12,
          neighborhood: 'center',
          city: 'Santa Maria',
          state: 'RS'
        }
      },
      {
        id: 5,
        date: '25/11/2022',
        donationConfirmed: true,
        address: {
          bloodDonorCenter: 'Hospital de santa Maria',
          street: 'Rua Maria Oliveira',
          number: 12,
          neighborhood: 'center',
          city: 'Santa Maria',
          state: 'RS'
        }
      },
      {
        id: 6,
        date: '25/11/2022',
        donationConfirmed: false,
        address: {
          bloodDonorCenter: 'Hospital de santa Maria',
          street: 'Rua Maria Oliveira',
          number: 12,
          neighborhood: 'center',
          city: 'Santa Maria',
          state: 'RS'
        }
      }
    ],
  },
  {
    id: 2,
    name: 'joão Magalhaes',
    cellphone: '35914614461',
    email: 'jmagalhaes@gmail.com',
    bornAt: '01/11/1990',
    isHealthNow: true,
    bloodType: 'O-',
    city: 'Belo Orizonte',
    weight: 80,
    password: '12345',
    donations: []
  },
  {
    id: 3,
    name: 'Mario Vergara',
    cellphone: '1999851256',
    email: 'vergara@gmail.com',
  }
  ],

  representatives:
  [
    {
      id: 1,
      name: 'Marcelo Campos',
      cellphone: '35924664211',
      email: 'marcelo@gmail.com',
      bornAt: '01/09/1990',
      weight: 80,
      password: '12345'
    },
  ]
}

const renderUserIsNotADonator = (donationData) => {
  const renderYouReNotADonator = document.createElement('div')
  renderYouReNotADonator.classList.add("donation-data__you-re-not-a-donator");
  renderYouReNotADonator.innerHTML = '<p>Esse usuário ainda não terminou o cadastro :(</p>'
  donationData.appendChild(renderYouReNotADonator)

  const getScheduleButton = document.getElementById('schedule-div')
  getScheduleButton.style.display = 'none'
}

const renderDonationInfo = (donationData) => {
  const renderDonationDataHeader = document.createElement('h1')
  renderDonationDataHeader.classList.add("donation-data__header");
  renderDonationDataHeader.innerHTML = 'Doações'
  donationData.appendChild(renderDonationDataHeader)

  const renderDonationDataContainer = document.createElement('div')
  renderDonationDataContainer.classList.add("donation-data__container");
  donationData.appendChild(renderDonationDataContainer)

  user.donations.sort((a, b) =>
    a.donationConfirmed === b.donationConfirmed ? 0 : a.donationConfirmed ? 1 : -1
  ).map((donation) => {
    const renderDonationCard = document.createElement('div')
    renderDonationCard.classList.add("donation-data__container__donation-card");

    const renderDonationCardDate = document.createElement('p')
    renderDonationCardDate.classList.add("donation-data__container__donation-card__date");
    renderDonationCardDate.innerHTML = donation.date;
    renderDonationCard.appendChild(renderDonationCardDate)

    const renderDonationCardAddress = document.createElement('p')
    renderDonationCardAddress.classList.add("donation-data__container__donation-card__address");
    renderDonationCardAddress.innerHTML = donation.address.bloodDonorCenter;
    renderDonationCard.appendChild(renderDonationCardAddress)

    const renderDonationCardStatus = document.createElement('span')
    if (donation.donationConfirmed) {
      renderDonationCardStatus.classList.add("donation-data__container__donation-card__confimed");
      renderDonationCardStatus.innerHTML = 'Coletado'
    }
    else {
      renderDonationCardStatus.classList.add("donation-data__container__donation-card__scheduled");
      renderDonationCardStatus.innerHTML = 'Agendado'
      const renderScheduleButtonEdit = document.createElement('object');
      renderScheduleButtonEdit.classList.add("donation-data__container__donation-card__edit");
      renderDonationCardStatus.appendChild(renderScheduleButtonEdit)
      renderScheduleButtonEdit.setAttribute('data', '../../public/assets/icons/edit-icon.png')
      renderScheduleButtonEdit.setAttribute('id', 'open-modal-edit-schedule')

      renderDonationCardStatus.style.position = 'relative'
      renderScheduleButtonEdit.style.position = 'absolute'
      renderScheduleButtonEdit.style.right = '-10px'
      renderScheduleButtonEdit.style.top = '-12px'
      renderScheduleButtonEdit.style.color = '#ffffff'
      renderScheduleButtonEdit.style.background = '#EB3738'
      renderScheduleButtonEdit.style.padding = '1px'
      renderScheduleButtonEdit.style.borderRadius = '100px'
      renderScheduleButtonEdit.style.width = '25px'
      renderScheduleButtonEdit.style.height = '25px'


    }
    renderDonationCard.appendChild(renderDonationCardStatus)

    renderDonationDataContainer.appendChild(renderDonationCard)
  })
}

const { userId } = getItemLocalStorage('base-blood-signin');

const getDatabase = () =>  {
  const databaseString = localStorage.getItem('base-blood-user-db');
  return databaseString ? JSON.parse(databaseString) : { users: [], representatives: [] };
}

const saveDatabase = (database) => {
  const databaseString = JSON.stringify(database);
  localStorage.setItem('base-blood-user-db', databaseString);
}

function getUserById(userId) {
  const database = getDatabase();
  const user = database.find(user => user.id === userId);
  return user;
}
// INFORMAÇÕES DO DOADOR
const user = getUserById(userId)
const donorInfoData = document.getElementsByClassName('donor-info__data')[0];


const renderDonorName = document.createElement('p')
renderDonorName.classList.add("donor-info__data__text");
renderDonorName.innerHTML = `<b>Nome: </b>${user.name}`
donorInfoData.appendChild(renderDonorName)

const renderDonorCellphone = document.createElement('p')
renderDonorCellphone.classList.add("donor-info__data__text");
renderDonorCellphone.innerHTML = `<b>Telefone: </b>${user.cellphone}`
donorInfoData.appendChild(renderDonorCellphone)

const RenderDonorEmail = document.createElement('p')
RenderDonorEmail.classList.add("donor-info__data__text");
RenderDonorEmail.innerHTML = `<b>E-mail: </b>${user.email}`
donorInfoData.appendChild(RenderDonorEmail)

if (user.bornAt) {
  const renderUserBornAt = document.createElement('p')
  renderUserBornAt.classList.add("donor-info__data__text");
  renderUserBornAt.innerHTML = `<b>Data de nascimento: </b>${user.bornAt}`
  donorInfoData.appendChild(renderUserBornAt)
}

if (user.city) {
  const renderUserCity = document.createElement('p')
  renderUserCity.classList.add("donor-info__data__text");
  renderUserCity.innerHTML = `<b>City: </b>${user.city}`
  donorInfoData.appendChild(renderUserCity)
}

if (user.weight) {
  const renderUserWeight = document.createElement('p')
  renderUserWeight.classList.add("donor-info__data__text");
  renderUserWeight.innerHTML = `<b>Peso: </b>${user.weight}kg`
  donorInfoData.appendChild(renderUserWeight)
}

if (user.bloodType) {
  const renderBloodType = document.createElement('p')
  renderBloodType.classList.add("donor-info__data__text");
  renderBloodType.innerHTML = `<b>Tipo de sangue: </b>${user.bloodType}`
  donorInfoData.appendChild(renderBloodType)
}

// INFORMAÇÕES SOBRE DOAÇÃO

const donationData = document.getElementsByClassName('donation-data')[0];

if (!user.bloodType || !user.bornAt || !user.isHealthNow || !user.city) {
  renderUserIsNotADonator(donationData)
}
else if (!user.donations.length) {
  const renderYouReNotADonator = document.createElement('div')
  renderYouReNotADonator.classList.add("donation-data__you-re-not-a-donator");
  renderYouReNotADonator.innerHTML = '<p>Esse doador ainda não fez nenhuma doação ou agendamento:)</p>'
  donationData.appendChild(renderYouReNotADonator)
}
else {
  renderDonationInfo(donationData)
}