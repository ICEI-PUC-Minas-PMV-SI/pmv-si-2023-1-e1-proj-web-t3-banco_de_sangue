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

// INFORMAÇÕES DO DOADOR
const urlParams = new URLSearchParams(window.location.search);
var donorId = urlParams.get('id');
const user = findUserById(donorId)
const donorInfoData = document.getElementsByClassName('donor-info__data')[0];


const renderDonorName = document.createElement('p')
renderDonorName.classList.add("donor-info__data__text");
renderDonorName.innerHTML = `<b>Nome: </b>${user.name}`
donorInfoData.appendChild(renderDonorName)

const renderDonorCellphone = document.createElement('p')
renderDonorCellphone.classList.add("donor-info__data__text");
renderDonorCellphone.innerHTML = `<b>Telefone: </b>(${user.ddd}) ${user.phone}`
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
else if (!user.donations) {
  const renderYouReNotADonator = document.createElement('div')
  renderYouReNotADonator.classList.add("donation-data__you-re-not-a-donator");
  renderYouReNotADonator.innerHTML = '<p>Esse doador ainda não fez nenhuma doação ou agendamento:)</p>'
  donationData.appendChild(renderYouReNotADonator)
}
else {
  renderDonationInfo(donationData)
}