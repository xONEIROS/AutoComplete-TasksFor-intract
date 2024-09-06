function clickTasksAndVerify() {
    const taskElements = document.querySelectorAll('._task_trigger_container_1h9z2_1');
    
    if (taskElements.length === 0) {
        console.log('No task elements found.');
        return;
    }

    taskElements.forEach((element, index) => {
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(clickEvent);  // Dispatch a simulated click event
        console.log(`Clicked on task element ${index + 1}`);
    });

    console.log(`Clicked on ${taskElements.length} task element(s) in total.`);
    

    const checkAndClickVerifyButtons = () => {
        const verifyButtons = document.querySelectorAll('button[data-verify-button-status="idle"]._container_d8fl8_1');
        if (verifyButtons.length === 0) {
            console.log('No verify buttons found. Retrying...');
            setTimeout(checkAndClickVerifyButtons, 2000);  
            return;
        }
        
        verifyButtons.forEach((button, index) => {
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            button.dispatchEvent(clickEvent);  // Dispatch a simulated click event
            console.log(`Clicked on verify button ${index + 1}`);
        });
        
        console.log(`Clicked on ${verifyButtons.length} verify button(s) in total.`);
    };
    setTimeout(checkAndClickVerifyButtons, 3000);
}

clickTasksAndVerify();
