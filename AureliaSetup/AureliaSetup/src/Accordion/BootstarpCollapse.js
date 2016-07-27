export class BootstarpCollapse {
    constructor() 
    {
        
        this.adminlist =[];
        this.roles = [];
        this.ifClick = false;
        this.selectedRoleName="Select Role";
        this.adminlist.push(new Records(0, "Vallabha"));
        this.adminlist.push(new Records(1, "Rohan"));
        this.adminlist.push(new Records(2, "Sarath"));
        this.adminlist.push(new Records(3, "Sidharth"));
        this.adminlist.push(new Records(4, "Surbhi"));
        this.adminlist.push(new Records(5, "Rayudu"));
        for (var i = 0; i < 6; i++) {
            // self.adminList.push(self.records);
            this.adminlist;
        }

        this.roles.push(new AllRoles(0, 'Vendor Admin'));
        this.roles.push(new AllRoles(1, 'Gtz Admin'));
        this.roles.push(new AllRoles(2, 'Vendor Driver'));
        for (var i = 0; i < 3; i++) {
            // self.adminList.push(self.records);
            self.roles;
        }
    }

    RoleSelector() {
        var self = this;
        if (self.ifClick == true) {
            self.ifClick = false;
        }
        else {
            self.ifClick = true;
        }

    }

    SelectMenu(data, event) {
        var self = this;
        self.ifClick = false;
        self.selectedRoleName = data.roleName;
    }

    created() {
        var self = this;
        window.onclick = function (event) {
            if (!$(event.target).parents().hasClass('dropdown')) {
                if (self.ifClick == true) {
                    self.ifClick = false;
                }
            }
        }
    }

    attached() {

        var leftWidth = $('.AllAdminLists').width();
        $('.FixedSearchSectionInAdmminLst').css('width', leftWidth + 'px');
        $(window).trigger('resize');


        $(window).resize(function () {
            var leftWidth = $('.AllAdminLists').width();
            $('.FixedSearchSectionInAdmminLst').css('width', leftWidth + 'px');
        });
    }
}

export class Records {
    index: number;
    name: string;
    constructor(index, name) 
    {
        var self = this;
        self.index = index;
        self.name = name;
    }
}

export class AllRoles {
    value: number;
    roleName: string;
    constructor(value, roleName) {
        this.value = value;
        this.roleName = roleName;
    }
}