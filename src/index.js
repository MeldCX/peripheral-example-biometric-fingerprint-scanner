import Agent from '@meldcx/agent';

const agent = new Agent();

window.agent = agent; 

const reportError = (err) => console.error(err)

const initScanner = async() => {
    try {
        const res = await agent.Peripherals.Biometric.init();
        initResult.innerHTML = JSON.stringify(res);
    } catch(ex) {
        reportError(ex);
    }
}

const onStatus = async() => {
    const statusUpdate = (res) => onStatusResult.innerHTML = JSON.stringify(res);

    try {
        agent.Peripherals.Biometric.onStatus(statusUpdate);
    } catch(ex) {
        reportError(ex);
    }
}

const enrollScanner = async() => {
    try {
        const res = await agent.Peripherals.Biometric.enroll();
        enrollResult.innerHTML = JSON.stringify(res);
    } catch(ex) {
        reportError(ex);
    }
}

const listFingersScanner = async() => {
    try {
        const res = await agent.Peripherals.Biometric.listFingers();
        listFingersResult.innerHTML = JSON.stringify(res);
    } catch(ex) {
        reportError(ex);
    }
}

const verifyScanner = async() => {
    try {
        const res = await agent.Peripherals.Biometric.verify();
        verifyResult.innerHTML = JSON.stringify(res);
    } catch(ex) {
        reportError(ex);
    }
}

const deleteAllScanner = async() => {
    try {
        const res = await agent.Peripherals.Biometric.deleteAll();
        deleteAllResult.innerHTML = JSON.stringify(res);
    } catch(ex) {
        reportError(ex);
    }
}

const resetScanner = async() => {
    try {
        const res = await agent.Peripherals.Biometric.reset();
        resetResult.innerHTML = JSON.stringify(res);
    } catch(ex) {
        reportError(ex);
    }
}

const init = async() => {
    reportError('Agent Initialising')
    await agent.onReadyAsync();
    
    reportError('Agent is ready!')

    initButton.addEventListener('click', initScanner);
    onStatusButton.addEventListener('click', onStatus);
    enrollButton.addEventListener('click', enrollScanner);
    listFingersButton.addEventListener('click', listFingersScanner);
    verifyButton.addEventListener('click', verifyScanner);
    deleteAllButton.addEventListener('click', deleteAllScanner);
    resetButton.addEventListener('click', resetScanner);
}



const initButton = document.getElementById('init-button');
const onStatusButton = document.getElementById('onStatus-button');
const enrollButton = document.getElementById('enroll-button');
const listFingersButton = document.getElementById('listFingers-button');
const verifyButton = document.getElementById('verify-button');
const deleteAllButton = document.getElementById('deleteAll-button');
const resetButton = document.getElementById('reset-button');

const initResult = document.getElementById('init-result');
const onStatusResult = document.getElementById('onStatus-result');
const enrollResult = document.getElementById('enroll-result');
const listFingersResult = document.getElementById('listFingers-result');
const verifyResult = document.getElementById('verify-result');
const deleteAllResult = document.getElementById('deleteAll-result');
const resetResult = document.getElementById('reset-result');

init()