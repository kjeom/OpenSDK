package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GetCommitteeSize200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetCommitteeSizeApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getCommitteeSize")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GetCommitteeSize200Response gr = sdk.klay.getCommitteeSize(
            "0x1b4")
        .send();
        gr.getResult();
    }
}