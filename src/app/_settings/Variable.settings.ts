
export class VariableSettings {

    private static SINGLESELECTION       : string = 'http:/ikm-group.ch/archimeo/sjp#SingleSelection';
    private static SEARCHSELECTION      : string = 'http:/ikm-group.ch/archimeo/sjp#SearchSelection';
    private static VALUEINSERT          : string = 'http:/ikm-group.ch/archimeo/sjp#ValueInsert';
    private static MULTISELECTION       : string = 'http:/ikm-group.ch/archimeo/sjp#MultiSelection'

    private static NUMERIC_DATATYPE              : string = 'http://www.w3.org/2001/XMLSchema#integer'

    public  getSingleSelectionURI() : string {
        return VariableSettings.SINGLESELECTION;
    }

    public getSearchURI() : string {
        return VariableSettings.SEARCHSELECTION;
    }

    public  getValueInsertURI() : string {
        return VariableSettings.VALUEINSERT;
    }

    public  getMultiSelectionURI() : string {
        return VariableSettings.MULTISELECTION;
    }

    public  getNumericDatatypeURI() : string {
        return VariableSettings.NUMERIC_DATATYPE;
    }
}
