const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Um dos sobreviventes desse pesadelo relatou o terror de escapar da fúria assassina de Pocoyo. As ruas antes pacíficas de Pocoyolandia se transformaram em um campo de batalha, onde a luta pela sobrevivência era a única coisa que importava. O sobrevivente mal conseguia acreditar no que estava testemunhando - seu amigo de longa data se transformara em uma ameaça mortal, e ele não tinha ideia do que poderia ter desencadeado essa transformação sombria.', 'success')
  })
}