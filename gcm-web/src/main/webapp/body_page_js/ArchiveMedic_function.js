 function formatRepo(repo) {
            if (repo.loading) return repo.text;
            
            var markup = "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repository__avatar'><img src='" + ImgProfile(repo.datenaiss,repo.sexe) + "' /></div>" +
                "<div class='select2-result-repository__meta'>" +
                "<div class='select2-result-repository__title'>"+repo.numFichPatient+ "</div>";

            if (repo.numFichPatient) {
                markup += "<div class='select2-result-repository__description'>" + repo.nom  +" "+ repo.prenom;
                 if(repo.assurCnam !== null)
                        markup +="<img src='../img/cnam.png' style='width: 28px;' >&nbsp;";
                 if(repo.codeApci !== "")
                        markup +="<img src='../img/apci_logo_600w.png' style='width: 28px;' >&nbsp;";
                 if(repo.autreAssur !== "")
                        markup +=AutreAssurImg(repo.autreAssur);
                markup += "</div>";
            }

            markup += "<div class='select2-result-repository__statistics'>" +
                "<div class='select2-result-repository__forks'><span class='glyphicon glyphicon-flash'></span> " + repo.fixe + " Forks</div>" +
                "<div class='select2-result-repository__stargazers'><span class='glyphicon glyphicon-star'></span> " + repo.gsm + " Stars</div>" +
                "<div class='select2-result-repository__watchers'><span class='glyphicon glyphicon-eye-open'></span> " + repo.profession + " Watchers</div>" +
                "</div>" +
                "</div></div>";

            return markup;
        }

        function formatRepoSelection(repo) {
            return repo.numFichPatient || repo.text;
        }
var paramater = JSON.parse(localStorage.getItem("paramater"));

        $("#select2-patient").select2({
            placeholder: "Enter id du Patient",
            width: "100%",
            ajax: {
                url: "http://"+GetUrl()+":8090/gcm-web/Gestion_Patient?type=consult&function=GetListPatientByMedecin&code_Med_Trit="+paramater.codeMedTrit.codeMedTrit,
                dataType: 'json',
                delay: 250,
                data: function(params) {
                    return {
                        q: params.term, // search term
                        page: params.page
                    };
                },
                processResults: function(data, page) {
                    // parse the results into the format expected by Select2.
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data
                    _.each(data, function (item) {item.id = item.numFichPatient; });
                    return {
                        results: data
                    };
                },
                cache: true
            },
            escapeMarkup: function(markup) {
                return markup;
            }, // let our custom formatter work
            templateResult: formatRepo,
            templateSelection: formatRepoSelection
        });
