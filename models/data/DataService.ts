import * as ProjectRepository from './ProjectRepository'

export function GetPropertyById(id: number){
    let propertyName = '';
    if(id === 1){
        propertyName = 'Homestead'
    }
    else if(id === 2){
        propertyName = 'Rental'
    }
    else {
        propertyName = 'Corporate'
    }

    return propertyName;
}

export function GetProjectsByPropertyId(propertyId: string){
    const projectArray = ProjectRepository.Projects;

    const projectsByProperty = projectArray.filter(p => p.propertyId === propertyId)

    return projectsByProperty;
}   