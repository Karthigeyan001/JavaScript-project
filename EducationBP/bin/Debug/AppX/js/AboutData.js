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

    WinJS.Namespace.define("AboutData", {
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
        for (var i = 0; i < groupedItems.groups.length; i++) {
            if (groupedItems.groups.getAt(i).key === key) {
                return groupedItems.groups.getAt(i);
            }
        }
    }

    // Get a unique item from the provided string array, which should contain a
    // group key and an item title.
    function resolveItemReference(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }

    // Returns an array of sample data that can be added to the application's
    // data list. 
    function generateSampleData() {
        var itemContent = "<p>It aims to develop and implement a comprehensive Human Resources plan, to include recruitment, professional development, retention and succession plans that attract qualified staff and faculty and ensure that they remain contemporary in their respective roles and disciplines.";
        var itemDescription = "Item Description: Looking beyond its success and recognizing the need for competent technical education, Dr.N.G.P initiated the establishment of Dr.N.G.P. Institute of Technology in 2007, and the N.G.P. Group of educational institutions. The College has been approved by the All India Council for Technical Education (AICTE), New Delhi and affiliated to Anna University, Chennai.";
        var groupDescription = "Group Description: Dr. Nalla.G.Palaniswami - A name that is taken with great reverence by the medical fraternity and common public alike, for his pioneering efforts in providing quality healthcare. Since its inception in 1989, the Kovai Medical Center and Hospital or KMCH as we know it, has been redefining the corporate hospital set up, making healthcare accessible to all, catering to patients from all over the globe";

        // These three strings encode placeholder images. You will want to set the
        // backgroundImage property in your real data to be URLs to images.
        var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";
        //var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";
        var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
        var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";

        // Each of these sample groups must have a unique key to be displayed
        // separately.
        var sampleGroups = [
            { key: "group1", title: "<b>Genesis</b>", subtitle: "Group Subtitle: 1", backgroundImage: darkGray, description: groupDescription },
            { key: "group2", title: "<b>Vision</b> and <b>Mission</b>", subtitle: "Group Subtitle: 2", backgroundImage: lightGray, description: groupDescription },
            { key: "group3", title: "<b>Objectives</b>", subtitle: "Group Subtitle: 3", backgroundImage: mediumGray, description: groupDescription },
            { key: "group4", title: "Group Title: 4", subtitle: "Group Subtitle: 4", backgroundImage: lightGray, description: groupDescription },
            { key: "group5", title: "Group Title: 5", subtitle: "Group Subtitle: 5", backgroundImage: mediumGray, description: groupDescription },
            { key: "group6", title: "Group Title: 6", subtitle: "Group Subtitle: 6", backgroundImage: darkGray, description: groupDescription }
        ];

        // Each of these sample items should have a reference to a particular
        // group.
        var sampleItems = [
            { group: sampleGroups[0], title: "<p>Dr. Nalla.G.Palaniswami - A name that is taken with great reverence by the medical fraternity and common public alike, for his pioneering efforts in providing quality healthcare. Since its inception in 1989, the Kovai Medical Center and Hospital or KMCH as we know it, has been redefining the corporate hospital set up, making healthcare accessible to all, catering to patients from all over the globe. Looking beyond its success and recognizing the need for competent technical education, Dr.N.G.P initiated the establishment of Dr.N.G.P. Institute of Technology in 2007, and the N.G.P. Group of educational institutions.</p><p>The College has been approved by the All India Council for Technical Education (AICTE), New Delhi and affiliated to Anna University, Chennai. It aims to develop and implement a comprehensive Human Resources plan, to include recruitment, professional development, retention and succession plans that attract qualified staff and faculty and ensure that they remain contemporary in their respective roles and disciplines.</p>", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[0], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[0], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[0], title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[0], title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: mediumGray },

            { group: sampleGroups[1], title: "<p>Dr. N.G.P. Institute of Technology, endeavors to be a place of excellence offering good infrastructure, an innovative and research oriented teaching community and a conducive atmosphere to learning. These elements help unfold the imagination and knowledge of young technical graduates. Dr. N.G.P. Institute of Technology, stands focused to ensure and promote knowledge and an identity based education committed to responsible citizenship.</p><p>Dr. N.G.P. Institute of Technology is committed to produce graduates of sound technical knowledge inclined towards research and innovation. It strives to inculcate ethical standards and good character in the minds of young professionals. They are sculpted to be the right kind of technocrats and scientists for the nation.</p>", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[1], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[1], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: lightGray },

            { group: sampleGroups[2], title: "<ul>              <br>        <li>Provide contemporary technical education through training and research facilities in the emerging engineering areas </li>        <br>              <li>Augment human resource through student-centered training programmes that caters to the manpower requirements of a global market</li>           <br>           <li>Grow into a Centre of Excellence in domain knowledge by ensuring the presence of experienced and dedicated staff </li>      <br>                <li>Initiate measures to strengthen the research base through progressive update of infrastructural facilities.</li>                    </ul>", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[2], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[2], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[2], title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[2], title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            //{ group: sampleGroups[2], title: "Item Title: 6", subtitle: "Item Subtitle: 6", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[2], title: "Item Title: 7", subtitle: "Item Subtitle: 7", description: itemDescription, content: itemContent, backgroundImage: mediumGray },

            //{ group: sampleGroups[3], title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[3], title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            //{ group: sampleGroups[3], title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            //{ group: sampleGroups[3], title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: lightGray },
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
