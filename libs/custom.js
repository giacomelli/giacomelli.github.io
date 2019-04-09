var jd = {
    getIcon: function getIcon(post) {
        switch(post.category) {
            case 'News':
                return "{{ 'News' | categoryicon }}";
            case 'Article':
                return "{{ 'Article' | categoryicon }}";
            case 'Tutorial':
                return "{{ 'Tutorial' | categoryicon }}";
            case 'Lab':
                return "{{ 'Lab' | categoryicon }}";
        }
    },
    getCategory: function getCategory(post) {
        switch(post.category) {
            case 'News':
                return "{{ 'News' | categortytitle }}";
            case 'Article':
                return "{{ 'Article' | categortytitle }}";
            case 'Tutorial':
                return "{{ 'Tutorial' | categortytitle }}";
            case 'Lab':
                return "{{ 'Lab' | categortytitle }}";
        }
    },
    escapeRegex: function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    },
    initializeHightlightBox: function(title, category, tag) {
        var inview = new Waypoint.Inview({
            element: $(".highlight-box-title:contains(" + title + ")")[0],
            enter: function(direction) {
                // Já foi inicializado?
                if($("[list='" + title + "'] li").length > 0)
                    return;
                
                $.getJSON("{{ site.baseurl }}/search.json", function(json) {
                    function addItem(post) {
                        var sanitizedTitle = post.title.replace(/&#39;/g, "'")
                        sanitizedTitle = sanitizedTitle.replace(/&amp;#39;/g, "'")
                        
                        $("[list='" + title + "']").append("<li><a href='" + post.url + "'>" + sanitizedTitle + "</a></li>");
                    }
                    
                    var posts = $(json).filter(function (i,p) {
                        var selected = true;

                        if (category != '')
                            selected = p.category == category;
                
                        if (selected && tag != '')
                            selected = $.inArray(tag, p.tags.split(', ')) != -1;
                        
                        return selected;
                    });

                    var indexes = [];

                    for(var i = 0; i < 5 && i < posts.length; i++)
                    {
                        
                        do {
                            var index = Math.floor(Math.random() * posts.length);
                        } while($.inArray(index, indexes) != -1)

                        indexes.push(index);
                        addItem(posts[index]);
                    }        
                });
            }
        });
    },
    removeAccents: function(value) {
        if (value == null) return value;
        return value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }
}
