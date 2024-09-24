function shoeSectionById(id){
    // hide all section
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the section with the provide id as perameter
    document.getElementById(id).classList.remove('hidden')
}