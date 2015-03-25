(function () {
    "use strict";

    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(
        function groupKeySelector(item) { return item.group.key; },
        function groupDataSelector(item) { return item.group; }
    );

    // TODO: Replace the data with your real data.
    // You can add data from asynchronous sources whenever it becomes available.
    generateSampleData().forEach(function (item) {
        list.push(item);
    });

    WinJS.Namespace.define("HubData", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemReference: getItemReference,
        getItemsFromGroup: getItemsFromGroup,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return [item.group.key, item.title];
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    // Get the unique group corresponding to the provided group key.
    function resolveGroupReference(key) {
        for (var i = 1; i < groupedItems.groups.length; i++) {
            if (groupedItems.groups.getAt(i).key === key) {
                return groupedItems.groups.getAt(i);
            }
        }
    }

    // Get a unique item from the provided string array, which should contain a
    // group key and an item title.
    function resolveItemReference(reference) {
        for (var i = 1; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }

    // Returns an array of sample data that can be added to the application's
    // data list. 
    function generateSampleData() {
        var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";
        var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
        var groupDescription = "Group Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor scelerisque lorem in vehicula. Aliquam tincidunt, lacus ut sagittis tristique, turpis massa volutpat augue, eu rutrum ligula ante a ante";
        var RecordType1 = Object.freeze({
            bigger1: 1,
            big1: 2,
            medium1: 3,
            small1: 4,
            campus1: 5,
            campusone1: 6,
        });

        // These three strings encode placeholder images. You will want to set the
        // backgroundImage property in your real data to be URLs to images.
        var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";
        var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
        var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";

        // Each of these sample groups must have a unique key to be displayed
        // separately.
        var sampleGroups = [
            { key: "group1", title: "<b>A</b>bout <b>U</b>s", subtitle: "Group Subtitle: 1", backgroundImage: "../../images/HubPage/2.jpg", description: groupDescription },
            { key: "group2", title: "<b>C</b>ourses <b>A</b>vailable", subtitle: "Group Subtitle: 2", backgroundImage: "../../images/HubPage/CourseImg.png", description: groupDescription },
            { key: "group3", title: "<b>L</b>ife on <b>C</b>ampus", subtitle: "Group Subtitle: 3", backgroundImage: "../../images/HubPage/CampusLife1.png", description: groupDescription },
            { key: "group4", title: "<b> And More...</b>", subtitle: "Group Subtitle: 4", backgroundImage: "../../images/HubPage/CuHappening3.png", description: groupDescription },
            { key: "group5", title: "about<b>us</b>", subtitle: "Group Subtitle: 5", backgroundImage: mediumGray, description: groupDescription },
            { key: "group6", title: "about<b>us</b>", subtitle: "Group Subtitle: 6", backgroundImage: darkGray, description: groupDescription }
        ];

        // Each of these sample items should have a reference to a particular
        // group.
        var sampleItems = [
            { group: sampleGroups[0], title: "About Us", subtitle: "The essence of education lies in translating opportunities into experiences of empowerment, in transcending 'what is' to 'what can be' and transforming limitations into limitless learning. Welcome to an institution, that recognizes the power of education to help Nurture and Progress", recordType: RecordType1.campus1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/2.jpg" },
          // {group: sampleGroups[0], title: "Use Back Button to Navigate", subtitle: "Item Subtitle: 2",  description: itemDescription, content: itemContent },
            //{ group: sampleGroups[0], title: "Item Title: 3", subtitle: "Item Subtitle: 3", recordType: RecordType1.big1, description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[0], title: "Item Title: 4", subtitle: "Item Subtitle: 4", recordType: RecordType1.big1, description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[0], title: "Item Title: 5", subtitle: "Item Subtitle: 5", recordType: RecordType1.big1, description: itemDescription, content: itemContent, backgroundImage: mediumGray },

            { group: sampleGroups[1], title: "Item Title: 2", subtitle: "Item Subtitle: 2", recordType: RecordType1.bigger1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/CourseImg.jpg" },
            { group: sampleGroups[1], title: "Civil", subtitle: "Department", recordType: RecordType1.small1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#ffd458" },
            { group: sampleGroups[1], title: "Mech", subtitle: "Department ", recordType: RecordType1.small1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#ffd458" },
            { group: sampleGroups[1], title: "ECE", subtitle: "Department ", recordType: RecordType1.small1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#ffd458" },
            { group: sampleGroups[1], title: "CSE", subtitle: "Department ", recordType: RecordType1.small1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#ffd458" },
            { group: sampleGroups[1], title: "EEE", subtitle: "Department", recordType: RecordType1.small1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#ffd458" },
            { group: sampleGroups[1], title: "IT", subtitle: "Department", recordType: RecordType1.small1, description: itemDescription, content: itemContent, backgroundImage: mediumGray, backgroundColor: "#ffd458" },


            { group: sampleGroups[2], title: "fun ‘n’ friends", subtitle: "The happiest moments of our life, being spent in college is also expected to be more productive with friends around us. A small world of various behaviours were met and we get trained for the real world. In Dr.NGP Institute of technology we give full freedom to nurture and develop a great future.", recordType: RecordType1.campus1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/CampusLife1.jpg" },
            { group: sampleGroups[2], title: "study ‘n’ explore", subtitle: "Centres of Excellence are established paving way for students to to Explore and Study the relavent things in association with various reputed organizations and research labs with the intention of providing opportunities for all, so as to obtain individualized and intellectual training to students.", recordType: RecordType1.campusone1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/CampusLife2.jpg" },
            { group: sampleGroups[2], title: "research stuff", subtitle: "The institute has IBM Software centre of Excellence, CISCO Networking Academy, Texas Instruments Center, National Instruments LabVIEW Academy and various cells to provide facility for research. The library has access to E-journals like IEEE Xplore, Science Direct etc.", recordType: RecordType1.campus1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/CampusLife3.jpg" },
            //{ group: sampleGroups[2], title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[2], title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[2], title: "Item Title: 6", subtitle: "Item Subtitle: 6", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[2], title: "Item Title: 7", subtitle: "Item Subtitle: 7", description: itemDescription, content: itemContent, backgroundImage: mediumGray },

            { group: sampleGroups[3], title: " Contact Us ", subtitle: "Dr. N.G.P. Institute of Technology ,Dr. N.G.P. Nagar,Kalapatti Road,Coimbatore - 641048", recordType: RecordType1.medium1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/CuHappening1.png" },
            { group: sampleGroups[3], title: "We are Located at", subtitle: "http://binged.it/1sjNKXl", recordType: RecordType1.medium1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/Capture.png" },
            //{ group: sampleGroups[3], title: "Lorem ipsum dolor sit amet", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis laoreet sollicitudin. Cras placerat, lectus id consequat tincidunt, ligula justo pellentesque nunc, et ultrices ligula ante id", recordType: RecordType1.medium1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/CuHappening3.png" },
            { group: sampleGroups[3], title: "App Developed By Menaka.M", subtitle: "I am currently pursuing B.E in CSE at Dr.NGP institute of Technology. Technology is always Fun Learning, Even we girls Love it. And Here is a Little proof. ;) ", recordType: RecordType1.medium1, description: itemDescription, content: itemContent, backgroundImage: "../../images/HubPage/Menaka.jpg" },
            //{ group: sampleGroups[3], title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[3], title: "Item Title: 6", subtitle: "Item Subtitle: 6", description: itemDescription, content: itemContent, backgroundImage: lightGray },

            //{ group: sampleGroups[4], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[4], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[4], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[4], title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: mediumGray },

            //{ group: sampleGroups[5], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[5], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[5], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[5], title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[5], title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[5], title: "Item Title: 6", subtitle: "Item Subtitle: 6", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[5], title: "Item Title: 7", subtitle: "Item Subtitle: 7", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[5], title: "Item Title: 8", subtitle: "Item Subtitle: 8", description: itemDescription, content: itemContent, backgroundImage: lightGray }
        ];

        return sampleItems;
    }
})();
