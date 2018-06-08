var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/ride", {
        template : "<h1>Cara Kerja LET'S-RIDE</h1><br><p>1. User melakukan booking.</p><p>2. Driver menuju lokasi user.</p><p>3. Driver mengantar user ke tempat tujuan.</p><p>4. Melakukan pembayaran dengan tunai atau dari aplikasi.</p>"
    })

    .when("/car", {
        template : "<h1>Cara Kerja LET'S-CAR</h1><br><p>1. User melakukan booking.</p><p>2. Driver menuju lokasi user.</p><p>3. Driver mengantar user ke tempat tujuan.</p><p>4. Melakukan pembayaran dengan tunai atau dari aplikasi.</p>"
    })

    .when("/food", {
        template : "<h1>Cara Kerja LET'S-FOOD</h1><br><p>1. User melakukan booking.</p><p>2. Driver menuju lokasi user.</p><p>3. Driver mengantar user ke tempat tujuan.</p><p>4. Melakukan pembayaran dengan tunai atau dari aplikasi.</p>"
    })

    .when("/mart", {
        template : "<h1>Cara Kerja LET'S-MART</h1><br><p>1. User melakukan booking.</p><p>2. Driver menuju lokasi user.</p><p>3. Driver mengantar user ke tempat tujuan.</p><p>4. Melakukan pembayaran dengan tunai atau dari aplikasi.</p>"
    })

    .when("/send", {
        template : "<h1>Cara Kerja LET'S-SEND</h1><br><p>1. User melakukan booking.</p><p>2. Driver menuju lokasi user.</p><p>3. Driver mengantar user ke tempat tujuan.</p><p>4. Melakukan pembayaran dengan tunai atau dari aplikasi.</p>"
    })

    .when("/box", {
        template : "<h1>Cara Kerja LET'S-BOX</h1><br><p>1. User melakukan booking.</p><p>2. Driver menuju lokasi user.</p><p>3. Driver mengantar user ke tempat tujuan.</p><p>4. Melakukan pembayaran dengan tunai atau dari aplikasi.</p>"
    })
        .otherwise( {
        template : " "
    })
});

